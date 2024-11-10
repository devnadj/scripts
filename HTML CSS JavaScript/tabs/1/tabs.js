document.querySelectorAll('.tab-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const tabNumber = button.getAttribute('data-tab')

    document
      .querySelectorAll('.tab-btn')
      .forEach((btn) => btn.classList.remove('active'))
    button.classList.add('active')

    document.querySelectorAll('.tab-content').forEach((content) => {
      content.classList.remove('active')
      if (content.id === `tab-${tabNumber}`) {
        content.classList.add('active')
      }
    })
  })
})
