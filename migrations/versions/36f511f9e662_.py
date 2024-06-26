"""empty message

Revision ID: 36f511f9e662
Revises: 
Create Date: 2024-06-07 21:29:04.079161

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '36f511f9e662'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###
    op.create_table('restaurant',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(length=100), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_table('menu',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(length=100), nullable=False),
        sa.Column('description', sa.Text(), nullable=True),
        sa.Column('price', sa.Float(), nullable=False),
        sa.Column('category', sa.String(length=50), nullable=False),
        sa.Column('restaurant_id', sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(['restaurant_id'], ['restaurant.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_table('table',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('number', sa.String(length=10), nullable=False),
        sa.Column('restaurant_id', sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(['restaurant_id'], ['restaurant.id'], ),
        sa.PrimaryKeyConstraint('id')
    )

def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    # ### end Alembic commands ###
    op.drop_table('menu')
    op.drop_table('restaurant')
    op.drop_table('table')