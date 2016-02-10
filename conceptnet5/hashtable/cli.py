import click
from .build_index import build_index


@click.command(name='cn5-build-table')
@click.argument('preindex_filename', type=click.Path(readable=True, dir_okay=False))
@click.argument('hashtable_filename', type=click.Path(writable=True, dir_okay=False))
@click.argument('hash_width', type=int)
def run_build(preindex_filename, hashtable_filename, hash_width):
    build_index(preindex_filename, hashtable_filename, hash_width)
