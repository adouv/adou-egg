import { RequestBaseModel } from '../requestBaseModel';

/**
 * 
 * @export
 * @interface RequestUserModel
 */
export interface RequestUserModel extends RequestBaseModel {
    /**
     * 
     * @type Number
     * @memberof RequestUserModel
     */
    Id?: Number;
    /**
     * 
     * @type String
     * @memberof RequestUserModel
     */
    UserName?: String;
    /**
     * 
     * @type String
     * @memberof RequestUserModel
     */
    Password?: String;
    /**
     * 
     * @type String
     * @memberof RequestUserModel
     */
    Picture?: String;
    /**
     * 
     * @type String
     * @memberof RequestUserModel
     */
    Email?: String;
    /**
     * 
     * @type Boolean
     * @memberof RequestUserModel
     */
    IsDelete?: Boolean;
    /**
     * 
     * @type Boolean
     * @memberof RequestUserModel
     */
    IsAdministrator?: Boolean;
    /**
     * 
     * @type String
     * @memberof RequestUserModel
     */
    Gender?: String;
    /**
     * 
     * @type String
     * @memberof RequestUserModel
     */
    CreateDataTime?: String;
    /**
     * 
     * @type String
     * @memberof RequestUserModel
     */
    UpdateDataTime?: String;
}