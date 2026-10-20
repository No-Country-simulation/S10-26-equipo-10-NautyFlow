import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const BoatPhoto = sequelize.define(
        'BoatPhoto', {
            id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true},
            boatId: { type: DataTypes.UUID, allowNull: false },
            objectKey: { type: DataTypes.TEXT, allowNull: false },
            thumbKey: { type: DataTypes.TEXT },
            position: { type: DataTypes.SMALLINT, allowNull: false, defaultValue: 0 },
            isCover: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false }
        },
        {
            tableName: 'boat_photos',
            timestamps: true,
            updatedAt: false 
        },
    );

    return BoatPhoto;
};