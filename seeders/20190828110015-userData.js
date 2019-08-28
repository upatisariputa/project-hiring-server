'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          name: '이정도',
          username: 'jd1386',
          email: 'lee.jungdo@gmail.com',
          phone: '010-3192-2910',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '김재완',
          username: 'lastrites2018',
          email: 'jaewan@gmail.com',
          phone: '02-879-5000',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '김성은',
          username: 'sunnysid3up',
          email: 'sunny@daum.net',
          phone: '010-4280-1991',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '이주연',
          username: 'yyijoo',
          email: 'jooyeon@gmail.com',
          phone: '010-2940-1401',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '구일모',
          username: 'johnnykoo84',
          email: 'johnny@gmail.com',
          phone: '010-8491-3982',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '장원진',
          username: 'jangwj2931',
          email: 'jang@gmail.com',
          phone: '010-4811-0921',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '최윤우',
          username: 'yoonooyoonoo',
          email: 'yoonooyoonoo@naver.com',
          phone: '010-3910-9849',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '이강인',
          username: 'kanginlee',
          email: 'kanginlee@hanmail.net',
          phone: '010-9311-9411',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '박동민',
          username: 'dongpark',
          email: 'dongpark@naver.com',
          phone: '010-4941-5092',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '정지수',
          username: 'jisoocity',
          email: 'jisoocity@naver.com',
          phone: '010-8591-4011',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
