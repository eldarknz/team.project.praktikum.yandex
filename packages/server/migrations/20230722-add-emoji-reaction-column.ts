import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface) {
  await queryInterface.addColumn('reaction', 'reaction_type', {
    type: DataTypes.STRING,
    allowNull: false,
  });

  await queryInterface.addColumn('reaction', 'emoji_unicode', {
    type: DataTypes.STRING,
    allowNull: true,
  });
}

export async function down(queryInterface: QueryInterface) {
  await queryInterface.removeColumn('reaction', 'reaction_type');
  await queryInterface.removeColumn('reaction', 'emoji_unicode');
}
