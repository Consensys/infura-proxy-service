import Sequelize from 'sequelize';

export const convertSolidityType = (typeName) => {
    switch (typeName) {
        case "address":
            return Sequelize.STRING
        case "bool":
            return Sequelize.BOOLEAN
        case "uint":
            return Sequelize.JSONB
        case "uint8":
            return Sequelize.INTEGER
        case "uint16":
            return Sequelize.INTEGER
        case "uint32":
            return Sequelize.INTEGER
        case "uint64":
            return Sequelize.BIGINT
        case "uint128":
            return Sequelize.JSONB
        case "uint256":
            return Sequelize.JSONB
        case "int":
            return Sequelize.JSONB
        case "int8":
            return Sequelize.INTEGER
        case "int16":
            return Sequelize.INTEGER
        case "int32":
            return Sequelize.INTEGER
        case "int64":
            return Sequelize.BIGINT
        case "int128":
            return Sequelize.JSONB
        case "int256":
            return Sequelize.JSONB
        case "address[]":
            return Sequelize.JSONB
        default:
            return Sequelize.STRING
    }
}