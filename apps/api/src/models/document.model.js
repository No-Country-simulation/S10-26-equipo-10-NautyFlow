import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Document = sequelize.define(
        'Document', {
            id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
            lancheroId: { type: DataTypes.UUID, allowNull: false },
            boatId: { type: DataTypes.UUID },
            type: { type: DataTypes.ENUM('LICENSE', 'INSURANCE', 'CRIMINAL_RECORD'), allowNull: false },
            status: { type: DataTypes.ENUM('PENDING', 'APPROVED', 'REJECTED', 'EXPIRED'), defaultValue: 'PENDING', allowNull: false },
            objectKey: { type: DataTypes.TEXT,  allowNull: false},
            mimeType: { type: DataTypes.TEXT, allowNull: false },
            sizeBytes: { type: DataTypes.INTEGER, allowNull: false },
            expiresAt: { type: DataTypes.DATEONLY },
            rejectReason: { type: DataTypes.TEXT },
            reviewedAt: { type:DataTypes.DATE },
            reviewedBy: { type: DataTypes.UUID },
            isCurrent: { type:DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
        },
        {
            tableName: 'documents',
            timestamps: true,
            updatedAt: false 
        },
    );
    return Document
};