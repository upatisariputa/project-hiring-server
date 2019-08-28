'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Todos',
      [
        {
          title: '모든 국민은 직업선택의 자유를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title:
            '모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title: '대한민국의 영토는 한반도와 그 부속도서로 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title: '국가는 평생교육을 진흥하여야 한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title:
            '형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title: '모든 국민은 양심의 자유를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title: '모든 국민은 인간다운 생활을 할 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title: '모든 국민은 통신의 비밀을 침해받지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title:
            '여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title: '근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title: '대한민국은 민주공화국이다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title: '대한민국의 영토는 한반도와 그 부속도서로 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title: '모든 국민은 학문과 예술의 자유를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title:
            '여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title: '모든 국민은 거주·이전의 자유를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title: '대한민국은 민주공화국이다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title: '연소자의 근로는 특별한 보호를 받는다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title:
            '여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title:
            '모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title:
            '형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          title: '모든 국민은 법 앞에 평등하다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title: '국가는 사회보장·사회복지의 증진에 노력할 의무를 진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title:
            '공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title:
            '정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title: '모든 국민은 직업선택의 자유를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title:
            '누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title: '국가는 대외무역을 육성하며, 이를 규제·조정할 수 있다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title:
            '국가는 개인이 가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를 진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title: '모든 국민은 직업선택의 자유를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title: '모든 국민은 법 앞에 평등하다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title:
            '형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title: '모든 국민은 거주·이전의 자유를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title: '대한민국의 영토는 한반도와 그 부속도서로 한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title:
            '대한민국의 경제질서는 개인과 기업의 경제상의 자유와 창의를 존중함을 기본으로 한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title:
            '모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title:
            '형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title: '대한민국은 민주공화국이다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title:
            '주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title:
            '국가는 법률이 정하는 바에 의하여 재외국민을 보호할 의무를 진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title: '모든 국민은 학문과 예술의 자유를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          title: '국가는 대외무역을 육성하며, 이를 규제·조정할 수 있다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title:
            '신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title:
            '주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title:
            '공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title:
            '모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title:
            '체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title: '국가는 여자의 복지와 권익의 향상을 위하여 노력하여야 한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title:
            '누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title: '모든 국민은 법 앞에 평등하다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title:
            '대한민국은 통일을 지향하며, 자유민주적 기본질서에 입각한 평화적 통일 정책을 수립하고 이를 추진한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title: '형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title: '대한민국은 민주공화국이다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title: '모든 국민은 직업선택의 자유를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title:
            '모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title:
            '모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title:
            '누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title:
            '형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title: '모든 국민은 종교의 자유를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title:
            '신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title:
            '대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          title:
            '대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title:
            '국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title: '모든 국민은 신체의 자유를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title:
            '모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title:
            '국가유공자·상이군경 및 전몰군경의 유가족은 법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여받는다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title:
            '공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title: '모든 국민은 법 앞에 평등하다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title:
            '누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title: '국가는 사회보장·사회복지의 증진에 노력할 의무를 진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title: '국가는 평생교육을 진흥하여야 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title: '국가는 평생교육을 진흥하여야 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title:
            '모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title: '국가는 사회보장·사회복지의 증진에 노력할 의무를 진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title:
            '국가는 개인이 가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를 진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title:
            '모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title: '모든 국민은 직업선택의 자유를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title:
            '형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title:
            '정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title:
            '국가는 개인이 가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를 진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title:
            '국가는 개인이 가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를 진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          title: '국가는 평생교육을 진흥하여야 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title: '국가는 평생교육을 진흥하여야 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title: '모든 국민은 인간다운 생활을 할 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title:
            '주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title: '모든 국민은 양심의 자유를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title:
            '누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을 받지 아니한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title: '국가는 평생교육을 진흥하여야 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title: '모든 국민은 주거의 자유를 침해받지 아니한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title:
            '대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title:
            '공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title: '근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title: '교육은 무상으로 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title: '연소자의 근로는 특별한 보호를 받는다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title:
            '국가유공자·상이군경 및 전몰군경의 유가족은 법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여받는다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title:
            '모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title: '모든 국민은 주거의 자유를 침해받지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title: '모든 국민은 직업선택의 자유를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title: '모든 국민은 주거의 자유를 침해받지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title:
            '국가유공자·상이군경 및 전몰군경의 유가족은 법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여받는다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title:
            '정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 5
        },
        {
          title:
            '누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title:
            '형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title:
            '누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title: '모든 국민은 직업선택의 자유를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title: '모든 국민은 통신의 비밀을 침해받지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title:
            '모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title:
            '국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title: '모든 국민은 인간다운 생활을 할 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title: '대한민국의 영토는 한반도와 그 부속도서로 한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title:
            '국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title:
            '여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title: '교육은 무상으로 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title:
            '국가유공자·상이군경 및 전몰군경의 유가족은 법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여받는다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title: '연소자의 근로는 특별한 보호를 받는다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title: '모든 국민은 종교의 자유를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title:
            '누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title: '모든 국민은 양심의 자유를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title: '대한민국의 영토는 한반도와 그 부속도서로 한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title: '대한민국의 영토는 한반도와 그 부속도서로 한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title: '국가는 평생교육을 진흥하여야 한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 6
        },
        {
          title:
            '대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title: '모든 국민은 통신의 비밀을 침해받지 아니한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title: '국가는 평생교육을 진흥하여야 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title: '국가는 사회보장·사회복지의 증진에 노력할 의무를 진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title:
            '정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title:
            '누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title:
            '체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title: '연소자의 근로는 특별한 보호를 받는다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title:
            '주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title: '모든 국민은 통신의 비밀을 침해받지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title: '모든 국민은 학문과 예술의 자유를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title:
            '모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title:
            '모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title: '모든 국민은 신체의 자유를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title: '모든 국민은 직업선택의 자유를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title:
            '체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title: '모든 국민은 종교의 자유를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title: '모든 국민은 주거의 자유를 침해받지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title: '형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title:
            '모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7
        },
        {
          title:
            '정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title: '국가는 대외무역을 육성하며, 이를 규제·조정할 수 있다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title:
            '누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title: '국가는 대외무역을 육성하며, 이를 규제·조정할 수 있다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title: '모든 국민은 신체의 자유를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title: '모든 국민은 거주·이전의 자유를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title: '국가는 사회보장·사회복지의 증진에 노력할 의무를 진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title: '모든 국민은 능력에 따라 균등하게 교육을 받을 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title:
            '모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title:
            '국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title: '모든 국민의 재산권은 보장된다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title: '형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title:
            '모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title: '대한민국은 민주공화국이다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title:
            '대한민국의 경제질서는 개인과 기업의 경제상의 자유와 창의를 존중함을 기본으로 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title: '모든 국민은 학문과 예술의 자유를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title:
            '주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title:
            '국가는 법률이 정하는 바에 의하여 재외국민을 보호할 의무를 진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title: '모든 국민은 거주·이전의 자유를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title: '모든 국민은 직업선택의 자유를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 8
        },
        {
          title: '모든 국민의 재산권은 보장된다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title: '모든 국민은 인간다운 생활을 할 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title: '모든 국민은 신체의 자유를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title:
            '여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title: '대한민국의 영토는 한반도와 그 부속도서로 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title: '모든 국민은 인간다운 생활을 할 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title:
            '주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title:
            '정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title:
            '모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title: '국가는 사회보장·사회복지의 증진에 노력할 의무를 진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title: '국가는 대외무역을 육성하며, 이를 규제·조정할 수 있다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title: '대한민국은 민주공화국이다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title: '대한민국은 민주공화국이다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title: '모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title:
            '형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title: '모든 국민은 통신의 비밀을 침해받지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title:
            '체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title:
            '모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title: '국가는 평생교육을 진흥하여야 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title:
            '누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 9
        },
        {
          title:
            '누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title:
            '형사피의자 또는 형사피고인으로서 구금되었던 자가 법률이 정하는 불기소처분을 받거나 무죄판결을 받은 때에는 법률이 정하는 바에 의하여 국가에 정당한 보상을 청구할 수 있다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title:
            '모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title:
            '누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title:
            '모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title: '모든 국민은 인간다운 생활을 할 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title: '모든 국민은 법 앞에 평등하다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title: '모든 국민은 거주·이전의 자유를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title: '모든 국민은 학문과 예술의 자유를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title: '대한민국의 영토는 한반도와 그 부속도서로 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title: '모든 국민은 능력에 따라 균등하게 교육을 받을 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title: '대한민국은 민주공화국이다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title: '형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title: '교육은 무상으로 한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title:
            '모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title: '국가는 사회보장·사회복지의 증진에 노력할 의무를 진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title:
            '모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title:
            '누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을 받지 아니한다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title:
            '모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다.',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        },
        {
          title: '모든 국민은 신속한 재판을 받을 권리를 가진다.',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 10
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
