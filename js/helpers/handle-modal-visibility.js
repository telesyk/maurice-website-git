const handleModalVisibility = (event) => {
  event.preventDefault();
  
  const { target } = event;
  const parentModal = target.closest('.modal');
  // const modalHiddenState = parentModal.dataset.hidden;

  if (parentModal.dataset.hidden === 'false') {
    // console.log('data-hidden = false');
    parentModal.dataset.hidden = 'true';
  } else {
    // console.log('data-hidden = true');
    parentModal.dataset.hidden = 'false';
  }
  // modalHiddenState === 'false'
  
  parentModal.classList.toggle('modal-is-visible');
};

export default handleModalVisibility;
