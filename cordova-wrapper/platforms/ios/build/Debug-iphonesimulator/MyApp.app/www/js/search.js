document.getElementById('search').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    // Checks for the "Enter" key
    var searchValue = this.value;
    console.log(searchValue);
    window.location.href = 'result.html?search=' + searchValue;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('.category');

  categories.forEach((category) => {
    category.addEventListener('click', function () {
      const categoryName = this.getAttribute('data-category');
      window.location.href = `result.html?category=${encodeURIComponent(categoryName)}`;
    });
  });
});
