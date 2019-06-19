/**
 * mysql 插入数据返回结果实体
 */
export interface Insert {
    /**
     * 
     */
    fieldCount: Number,
    /**
     * 
     */
    affectedRows: Number,
    /**
     * 
     */
    insertId: Number,
    /**
     * 
     */
    serverStatus: Number,
    /**
     * 
     */
    warningCount: Number,
    /**
     * 
     */
    message: String,
    /**
     * 
     */
    protocol41: Boolean,
    /**
     * 
     */
    changedRows: Number
}