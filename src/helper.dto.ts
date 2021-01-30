export interface FieldItemDto{
    assembltype: "RadioGroup"|"Temperature"|"CheckboxGroup"|"TextareaField",
    checkValues: {text: string}[],
    decription: string,
    
    value: string
    required: string,
    propertyname: string,
}
export interface DepartItemDto{
    deptid: number,
    deptName: string,
    parentId: number,
    hasLeaf: boolean,
    childs:FieldItemDto[];
}
export interface LastSubmitData{
    templateid: string;
    username: string;       //用户名
	customerid: string,     //学校ID
	areaStr: string;
    cardNo: string;
	deptStr: {
        text:string,
        deptid:number
    },
    stuNo: string,          //学号
    phonenum: string;       //电话
	userid: string,
    sysDeptResVo:DepartItemDto[];
	cusTemplateRelations:FieldItemDto[];
}
export interface UserInfoDto{
    classDescription: string;
    classId: number;
    collegeId: number;
    customerId: number;
    majorId: number;
    stuNo: string;
    userId: number
    username: string;
}
export interface AppInfoDto{
    clockPersons: number
    clockPersonsFlag: boolean
    clockPersonsType: number
    createTime: string;         //创建时间
    creator: string
    customerAppClassifyId: number;
    customerAppTypeRuleList: any[]
    deptName: string;
    effectiveDistance: number
    effectiveDistanceFlag: boolean
    id: number
    modelFlag: boolean
    modifier: string
    name: string;               //显示名称
    schoolClockFlag: boolean
    sortNum: number;            //显示序号
    updateTime: string;         //更新时间
    url: string;                //"https://reportedh5.17wanxiao.com/health/index.html?templateid=pneumoniaTe&businessType=epmpics"
    urlFlag: boolean
}
export interface UpDataInfoItem{
    propertyname: string,
    value: string
}
export interface SubmitData{
    areaStr: string;            //百度定位JSON
    customerid: string;         //学校ID
    deptStr: {                  //系部
        deptid: number,         //系部代码
        text: string            //显示名称
    }
    deptid: number;             //系部代码
    gpsType: 1                  //定位类型
    phonenum: string;           //手机
    reportdate?: number;         //提交时间
    source: "app"           
    stuNo: string               //学号
    templateid: string;         //打卡类型
    token?: string;              
    updatainfo: UpDataInfoItem[];
    userid: string;
    username: string;
}


export interface AreaStrDto
{
    streetNumber: string,       //街道号
    street: string,             //街道名称
    district: string,           //区
    city: string,               //市
    province: string,           //省
    town: string,               //未知：猜测为村，测试为空
    pois: string,               //位置名称
    lat: number,                //纬度
    lng: number,                //经度
    code: string,               //未知：猜测邮编，测试为空
    address: string,            //区县+街道+街道号+名称
    text: string,               //省-城市名
}