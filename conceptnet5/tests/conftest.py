import os
import subprocess

import pytest
from shutil import copytree, rmtree

from conceptnet5.db.query import AssertionFinder


@pytest.fixture(scope='session', name='is_quick_run')
def quick_run(pytestconfig):
    return pytestconfig.option.quick


@pytest.fixture(scope='session')
def setup_test_directory(is_quick_run):
    if not is_quick_run:
        rmtree('testdata/current', ignore_errors=True)
        copytree('testdata/source/', 'testdata/current/')


@pytest.fixture(scope='session')
def test_env_variables():
    env_variables = os.environ.copy()
    env_variables['CONCEPTNET_BUILD_TEST'] = '1'
    env_variables['CONCEPTNET_REBUILD_PRECOMPUTED'] = '1'
    return env_variables

@pytest.fixture(scope='session')
def create_test_db(is_quick_run):
    if not is_quick_run:
        subprocess.run(["dropdb", "conceptnet-test", "--if-exists"])
        subprocess.run(["createdb", "conceptnet-test"])

def run_snakemake(env_variables, options=('-j', '4'), targets=()):
    cmd_args = ["snakemake"] + list(options) + list(targets)
    subprocess.run(cmd_args, env=env_variables, check=True)


@pytest.fixture(scope='session')
def run_build(test_env_variables, setup_test_directory, create_test_db):
    """
    Depending on this fixture will make sure that the (small) test build of ConceptNet
    is run, unless the 'quick' option is set, in which case it assumes the test build
    has already been run and just quickly runs tests.
    """
    run_snakemake(test_env_variables)


@pytest.fixture
def test_finder():
    return AssertionFinder('conceptnet-test')
