/** 컬럼 생성 룰
    width: 컬럼의 너비를 정의. 단위는 px. 이 값이 설정되지 않으면 기본값은 80px
    height: 컬럼의 높이를 정의. 단위는 px. 이 값이 설정되지 않으면 기본값은 20px
    header: 컬럼 헤더의 속성을 정의. 이 값이 설정되지 않으면 기본 값은 빈 객체
        text: 컬럼 헤더의 텍스트를 정의. 이 값이 설정되지 않으면 기본값은 컬럼의 id값
    id: 컬럼의 유일키 값. 중복되면 안됨. 이 값이 없는 경우 예외발생시켜야 함.
    fieldName: 중복될수있음. 데이터와 연계하기 위한 값.
*/
var testColumns = [
    {
        width: 50, 
        height: 40,
        header: {
            text: '총액'
        },
        id: 'totalPrice',
        fieldName: 'totalPrice'
    }, {
        width: 80,
        header: {
            text: '환율'
        },
        id: 'currencyRate',
        fieldName: 'currencyRate'
    }, {
        width: 50,
        header: {
            text: '국가명'
        },
        id: 'countryName',
        fieldName: 'countryName'
    }, {
        width: 50,
        header: {
            text: '이익'
        },
        id: 'profit',
        fieldName: 'profit'
    }, {
        width: 50,
        header: {
            text: '기타'
        },
        id: 'etc',
        fieldName: 'etc'
    }
];