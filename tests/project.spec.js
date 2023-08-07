const { test, expect } = require('@playwright/test');
//CHange to localhost on which it is running on
const nextjstest = 'http://localhost:3000/'; 
const nextjstestabout = 'http://localhost:3000/posts/about-me'
const nextjsproject = 'http://localhost:3000/posts/project'
const nextjsedu = 'http://localhost:3000/posts/education'


test('Check for Master Program Title', async ({ page }) => {
  await page.goto(nextjstest);
  let rolesAndCompanys=await page.locator('.h1').all(); //get all the h3 elements and store them in an array
  for (let roleAndCompany of rolesAndCompanys) { //iterate through the array
    await expect(roleAndCompany).toContain('Master Of Data Science Student'); //check that each element to contain.
  }
});

// Test checks if a Your Name is present
test('Check Yourname Presence on Home', async ({ page }) => {
  await page.goto(nextjstest);
  const headerText = await page.textContent('h1');
  await expect(headerText).toContain(' I’m Ravikumar Patel');
});

/* This test checks that the profile image is visible on the page */
test('Check Profile Image', async ({ page }) => {
  await page.goto(nextjstest);
  await page.locator('Image');
});

// Test to Check for The Subscrie Section
test('Check for Subscribe Section', async ({ page }) => {
  await page.goto(nextjstest);
  let Subscribe=await page.locator('.h1').all(); //get all the h1 elements and store them in an array
  for (let roleAndCompany of Subscribe) { //iterate through the array
    await expect(roleAndCompany).toContain('Subscribe'); //check that each element to contain.
  }
});

// Test to check Subscrie Email Input in the Subscribe Section
test('Check for Subscribe Email Input', async ({ page }) => {
  await page.goto(nextjstest);
  await page.getByRole('input', { name: 'EMAIL' });
});

// Test to check Subscrie Email Submit in the Subscribe Section
test('Check for Subscribe Email Submit', async ({ page }) => {
  await page.goto(nextjstest);
  await page.getByRole('input', { name: 'subscribe' });
});

// Test to check the Skill Section in About Me Page
test('Check Skill Section on About Me Page', async ({ page }) => {
  await page.goto(nextjstestabout);
  const headerText = await page.textContent('h2');
  await expect(headerText).toContain('Skills');
});

// Test to check the Experience Section in About Me Page
test('Check Experience Section on About Me Page', async ({ page }) => {
  await page.goto(nextjstestabout);
  let Experience=await page.locator('.h2').all(); //get all the h2 elements and store them in an array
  for (let ExpTag of Experience) { //iterate through the array
    await expect(ExpTag).toContain('Experience'); //check that each element to contain.
  }
  });

// Test to check the Passion Section in About Me Page
test('Check Passion Section on About Me Page', async ({ page }) => {
  await page.goto(nextjstestabout);
  let Passion=await page.locator('.h2').all(); //get all the h2 elements and store them in an array
  for (let PassTag of Passion) { //iterate through the array
    await expect(PassTag).toContain('Passion'); //check that each element to contain.
  }
  });

// This test checks that the responsive meta tag is present 
test('Check Responsive Meta Tag for Render', async ({ page }) => {
  await page.goto(nextjstest);
  const viewportMeta = await page.getAttribute('meta[name="viewport"]', 'content');
  await expect(viewportMeta).toBe('width=device-width');
});

/* This test checks that the meta description for SEO is not empty */
test('Check SEO Meta Description', async ({ page }) => {
  await page.goto(nextjstest);
  const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
  await expect(metaDescription).not.toBe('');
});


test('Check Project Section on Project Page', async ({ page }) => {
  await page.goto(nextjsproject);
  const headerText = await page.textContent('h1');
  await expect(headerText).toContain('My Project');
});

test('Check Education Section on Education Page', async ({ page }) => {
  await page.goto(nextjsedu);
  const headerText = await page.textContent('h2');
  await expect(headerText).toContain('Education');
});