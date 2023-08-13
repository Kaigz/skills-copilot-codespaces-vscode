function skillMember() {
  const member = document.getElementById('member');
  const memberBtn = document.getElementById('memberBtn');
  const memberClose = document.getElementById('memberClose');

  memberBtn.addEventListener('click', () => {
    member.classList.add('active');
  });

  memberClose.addEventListener('click', () => {
    member.classList.remove('active');
  });
}