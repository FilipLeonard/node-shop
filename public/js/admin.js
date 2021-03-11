const deleteProduct = async btn => {
  try {
    const prodId = btn.parentElement.querySelector('[name=productId]').value;
    const csrf = btn.parentElement.querySelector('[name=_csrf]').value;

    const res = await fetch(`/admin/product/${prodId}`, {
      method: 'DELETE',
      headers: {
        'csrf-token': csrf,
      },
    });
    if (res.ok) {
      btn.closest('article').remove();
    }
    const data = await res.json();
  } catch (err) {
    console.error(err);
  }
};

document.querySelector('.grid').addEventListener('click', event => {
  const button = event.target.closest('#deleteProduct');
  if (!button) return;
  deleteProduct(button);
});
