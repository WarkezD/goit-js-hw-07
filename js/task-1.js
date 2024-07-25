const categoriesList = document.getElementById('categories');

const categories = categoriesList.querySelectorAll('.item');

console.log('Number of categories:', categories.length);

categories.forEach(category => {

    const categoryTitle = category.querySelector('h2').textContent;

    const elementsInCategory = category.querySelectorAll('li');

    console.log(`Category: ${categoryTitle}`);

    console.log('Elements:', elementsInCategory.length);
}
)