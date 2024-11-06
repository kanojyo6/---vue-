import Mock from "mockjs";

const subjectsList = ['语文', '数学', '英语', '物理', '化学', '生物', '历史', '政治', '地理', '其他']

// 生成随机日期范围的函数
function getRandomDate(startYear: number, endYear: number) {
    const start: any = new Date(startYear, 0, 1); // 开始时间：1月1日
    const end: any = new Date(endYear, 11, 31); // 结束时间：12月31日
    const dateRange = end - start;
    const randomTime = Math.random() * dateRange + start.getTime();
    return new Date(randomTime);
}

// 格式化日期为 "YYYY.M.D" 的形式
function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月份从0开始
    const day = date.getDate();
    return `${year}.${month}.${day}`;
}

// 生成随机日期范围
function generateRandomDateRange() {
    const startDate = getRandomDate(2021, 2022);
    const endDate = getRandomDate(startDate.getFullYear(), 2022); // 确保结束日期在开始日期之后
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
}

// 生成用户id的函数
const generateMockUserIds = (start: String, end: String) => {
    const userIds = [];
    const startNum = parseInt(start.replace('jjb', ''), 10);
    const endNum = parseInt(end.replace('jjb', ''), 10);

    for (let i = startNum; i <= endNum; i++) {
        const formattedId = `jjb${String(i).padStart(8, '0')}`; // 确保 ID 格式为 8 位数
        userIds.push(formattedId);
    }

    return userIds;
};

let mainItems = Mock.mock('/item', {
    'items|12': [
        {
            'title|6-20': '@cword',
            'type|0-1': 0,
            'lowSalary|1-100': 0,
            'highSalary|100-200': 0,
            'name': '@cname',
            'grade|1': ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '七年级', '八年级', '九年级', '高一', '高二', '高三', '大学'],
            'subjects|1-3':
                function () {
                    // 随机选择1到3个不重复的科目
                    const count = Mock.Random.integer(1, 3);
                    return Mock.Random.shuffle(subjectsList).slice(0, count);
                }
        }
    ]
});

//基本信息
let resumeBasicItems = Mock.mock('/basicItem', {
    'items|1': [
        {
            'name': '@cname',
            'age|18-25': 0,
            'sax|1': ['男', '女'],
            'profassion|2-9': '@cword',
            'phoneNumber': /^1(5|3|7|8)[0-9]{9}$/,
            'wechatNumber|6-20': () => {
                const length = Mock.Random.integer(6, 20);
                return Mock.Random.string('alphaNumeric', length);
            },
            'address': () => {
                const domains = ['163.com', '126.com', 'qq.com', 'gmail.com', 'sina.com', 'sohu.com', '139.com'];
                const usernameLength = Mock.Random.integer(3, 10);
                const username = Mock.Random.string('lower', usernameLength) + Mock.Random.integer(1, 99);
                const domain = domains[Mock.Random.integer(0, domains.length - 1)];
                return `${username}@${domain}`;
            }
        }
    ]
})

//教学经历
let experienceItems = Mock.mock('/experienceItem', {
    'items|1-3': [
        {
            //教育经历
            'grade|1': ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '七年级', '八年级', '九年级', '高一', '高二', '高三', '大学'],
            'subjects|1-3':
                function () {
                    // 随机选择1到3个不重复的科目
                    const count = Mock.Random.integer(1, 3);
                    return Mock.Random.shuffle(subjectsList).slice(0, count);
                },
            'date': generateRandomDateRange(),
            'text|2-4': '@cparagraph',
        }
    ]
})

//在校经历
let schoolExperience = Mock.mock('/schoolExperience', {
    'items|1': [
        {
            //获奖证书
            'awardItems|2-3': [
                {
                    'award|4-13': '@cword',
                }
            ],
            //部门经历
            'schoolWork|1-2': [
                {
                    'ognization|3-12': '@cword',
                    'posts|2-5': '@cword',
                    'workText|2-3': '@cparagraph',
                }
            ]
        }
    ]
})

//模拟我的订单
let orders = Mock.mock('/orders', {
    'items|1-10': [
        {
            'title|6-20': '@cword',
            'type|0-1': 0,
            'lowSalary|1-100': 0,
            'highSalary|100-200': 0,
            'name': '@cname',
            'grade|1': ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '七年级', '八年级', '九年级', '高一', '高二', '高三', '大学'],
        }
    ]
})

//模拟我的收藏
let favorites = Mock.mock('/favorites', {
    'items|1-10': [
        {
            'title|6-20': '@cword',
            'type|0-1': 0,
            'lowSalary|1-100': 0,
            'highSalary|100-200': 0,
            'name': '@cname',
            'grade|1': ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '七年级', '八年级', '九年级', '高一', '高二', '高三', '大学'],
        }
    ]
})

//模拟历史浏览
let history = Mock.mock('/history', {
    'items|1-10': [
        {
            'title|6-20': '@cword',
            'type|0-1': 0,
            'lowSalary|1-100': 0,
            'highSalary|100-200': 0,
            'name': '@cname',
            'grade|1': ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '七年级', '八年级', '九年级', '高一', '高二', '高三', '大学'],
        }
    ]
})


//模拟好友列表
let friends = Mock.mock('/friends', {
    'items|3-10': [
        {
            'avatar|6-20': '@word',
            'name': '@cname',
            'grade|1': ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '七年级', '八年级', '九年级', '高一', '高二', '高三', '大学'],
            'userid|+1': generateMockUserIds('jjb00000001', 'jjb00010000'),
            'message|6-20': '@cword',
        }
    ]
})

let friendMessage = Mock.mock('/friends/message', {
    'message|6-30': [
        {
            'userid': '@boolean', // 这里是 同学的userid / 你的userid 用boolean代替 true为自己 false为同学
            'message|6-20': '@word'
        }
    ]
})