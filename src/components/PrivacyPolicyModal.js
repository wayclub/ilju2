import React from 'react';
import './PrivacyPolicyModal.css';

function PrivacyPolicyModal({ onClose }) {
  const privacyPolicyHtmlContent = `
    <h3>치즈고등어 개인정보 처리방침</h3>
    <p>치즈고등어(이하 "회사")는 사용자의 개인정보를 중시하며 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」을 비롯한 관련 법규상의 개인정보 보호규정 및 개인정보 보호지침을 준수합니다. 본 개인정보 처리방침은 사용자가 당사 웹사이트를 이용함에 있어 수집되는 개인정보의 유형, 수집 및 사용 목적, 보유 및 이용 기간, 개인정보의 보호 및 관리에 관한 사항 등을 설명합니다.</p>
    <h4>1. 개인정보의 수집 및 이용 목적</h4>
    <p>회사에서 처리하고 있는 개인정보는 아래 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제 18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다. 수집한 개인정보의 이용 목적과 수집 방법은 아래와 같습니다.</p>
    <ul>
      <li>항목: 사용자의 이름, 생년월일, IP 주소, 기기 정보, 접속 시점</li>
      <li>목적: 맞춤형 서비스 제공, 서비스 개선 및 통계 분석</li>
    </ul>
    <p>수집 방법: 사용자가 웹사이트에 직접 정보를 입력하거나, 웹사이트 사용 과정에서 자동으로 정보를 수집합니다.</p>
    <h4>2. 개인정보의 보유 및 이용 기간</h4>
    <p>보유 기간: 서비스 이용 기간 및 이용 후 5년</p>
    <ul>
      <li>세부 사항: 계약 또는 청약철회 등에 관한 기록 5년, 접속 로그 3개월, 통신비밀보호법에 의한 통신사실확인자료 12개월</li>
    </ul>
    <h4>3. 개인정보의 파기절차 및 방법</h4>
    <p>파기절차: 개인정보 수집 및 이용목적 달성 후 별도의 DB로 이전하여 보관 후 파기</p>
    <p>파기방법: 전자적 파일형태는 기록을 재생할 수 없는 방법으로 삭제, 종이 문서는 분쇄기로 분쇄하거나 소각</p>
    <h4>4. 개인정보의 제3자 제공 및 위탁 처리</h4>
    <p>위탁 처리: 개인정보 처리 업무를 위탁하지 않으며, Google Cloud Platform을 통해 데이터 관리합니다.</p>
    <p>국외 이전: 데이터는 미국 등 국외의 Google Cloud Platform 서버에 저장됩니다. Google Cloud Platform의 데이터 관리 및 보안 조치를 준수합니다.</p>
    <p>수집한 개인정보 이용 및 제 3자 제공: 회사는 통계작성, 학술연구 또는 시장조사를 위하여 필요하다면 이용자가 제공한 개인정보를 식별할 수 없는 형태로 가공하여 제3자에게 제공할 수 있습니다.</p>
    <h4>5. 사용자의 권리와 그 행사방법</h4>
    <p>사용자는 자신의 개인정보에 대한 열람, 정정, 삭제 요청 및 처리 정지를 언제든지 요청할 수 있습니다. 혹은 개인정보책임자에게 전화 또는 이메일로 개인정보의 조회, 수정, 삭제, 제공 동의 철회를 요청할 수 있습니다. 이용자가 개인정보의 오류에 대한 정정을 요청한 경우, 정정을 완료하기 전까지 해당 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다. 회사는 사용자의 요청에 의해 해지 또는 삭제된 개인정보는 본 개인정보 처리방침에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.</p>
    <h4>6. 개인정보의 안전성 확보 조치</h4>
    <p>기술적, 관리적 보호 조치를 통해 개인정보를 안전하게 보호합니다. 이에는 암호화, 접근 제한 등이 포함됩니다.</p>
    <h4>7. 개인정보 처리방침의 변경</h4>
    <p>본 방침은 법률 변경 또는 정책 조정에 따라 변경될 수 있으며, 변경 시 웹사이트를 통해 사전 고지합니다.</p>
    <h4>문의처</h4>
    <p>개인정보 보호책임자: 박지현<br>이메일: notorious_weirdo@naver.com<br>전화번호: 010-8398-4871<br>본 개인정보 처리방침은 2024.02.17부터 적용됩니다.</p>
    <p>기타 개인정보 침해에 대한 신고나 상담이 필요한 경우에 아래 기관에 문의 가능합니다.</p>
    <ul>
      <li>개인정보침해신고센터: <a href="http://privacy.kisa.or.kr">privacy.kisa.or.kr / 국번없이 118</a></li>
      <li>경찰청 사이버테러대응센터: <a href="http://www.netan.go.kr">www.netan.go.kr / 국번없이 02-393-9112</a></li>
      <li>대검찰청 사이버수사과: <a href="https://www.spo.go.kr">www.spo.go.kr / 국번없이 1301</a></li>
      <li>경찰청 사이버안전국: <a href="https://cyberbureau.police.go.kr">cyberbureau.police.go.kr / 국번없이 182</a></li>
    </ul>
`;


  return (
    <div className='modalBackdrop'>
      <div className='modalContent'>
        <div className='modalHeader'> {/* Non-scrolling wrapper */}
          <button className='closeButton' onClick={onClose}>X</button>
        </div>
        <div className="modalScrollContent"> {/* Scrolling content */}
          {/* Your modal's scrollable content goes here */}
          <div dangerouslySetInnerHTML={{ __html: privacyPolicyHtmlContent }} />
        </div>
      </div>
    </div>

  );
}

export default PrivacyPolicyModal;
