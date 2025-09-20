import { test, expect } from '@playwright/test';

test.describe('Portfolio Website', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/Michael Ajao-Olarinoye/);

    // Check hero section is visible
    await expect(page.locator('#home')).toBeVisible();

    // Check main heading
    await expect(page.getByRole('heading', { name: /Michael Ajao-Olarinoye/ })).toBeVisible();
  });

  test('navigation works correctly', async ({ page }) => {
    await page.goto('/');

    // Test navigation links in header
    const navigation = [
      { name: 'Research', href: '#research' },
      { name: 'Projects', href: '#projects' },
      { name: 'Publications', href: '#publications' },
      { name: 'Experience', href: '#experience' },
      { name: 'Education', href: '#education' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' },
    ];

    for (const item of navigation) {
      await page.locator('header').getByRole('link', { name: item.name }).click();
      await page.waitForTimeout(500); // Allow smooth scroll to complete
    }
  });

  test('technology stack is displayed', async ({ page }) => {
    await page.goto('/');

    // Check technology stack section
    await expect(page.getByText('Technology Stack')).toBeVisible();

    // Check individual technologies in hero section (more specific selectors)
    const technologies = [
      { name: 'Python', selector: 'span:has-text("Python")' },
      { name: 'PyTorch', selector: 'span:has-text("PyTorch")' },
      { name: 'TensorFlow', selector: 'span:has-text("TensorFlow")' },
      { name: 'Flutter', selector: 'span:has-text("Flutter")' },
      { name: 'R', selector: 'span:has-text("R"):not(:has-text("Research")):not(:has-text("PyTorch")):not(:has-text("TensorFlow"))' },
      { name: 'Julia', selector: 'span:has-text("Julia")' }
    ];

    for (const tech of technologies) {
      await expect(page.locator('#home').locator(tech.selector).first()).toBeVisible();
    }
  });

  test('responsive design - mobile menu', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check if mobile menu button is visible
    await expect(page.getByRole('button', { name: /toggle menu/i })).toBeVisible();

    // Click mobile menu
    await page.getByRole('button', { name: /toggle menu/i }).click();

    // Check if navigation items are visible in mobile menu
    await expect(page.locator('header').getByRole('link', { name: 'Research' })).toBeVisible();
  });

  test('external links work correctly', async ({ page }) => {
    await page.goto('/');

    // Test CV download link in hero section
    const cvLink = page.locator('#home').getByRole('link', { name: /download cv/i });
    await expect(cvLink).toBeVisible();
    await expect(cvLink).toHaveAttribute('href', '/michael_cv.pdf');

    // Test social links in hero section
    const githubLink = page.locator('#home').getByRole('link', { name: 'GitHub' });
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/michaelajao');

    const linkedinLink = page.locator('#home').getByRole('link', { name: 'LinkedIn' });
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/michael-ajao');
  });

  test('consistent dark gray theme is applied', async ({ page }) => {
    await page.goto('/');

    // Check background colors are always dark gray variants (no theme dependency)
    const body = page.locator('body');
    await expect(body).toHaveClass(/bg-gray-950/);

    // Check hero section background
    const heroSection = page.locator('#home');
    await expect(heroSection).toHaveClass(/bg-gradient-to-br/);
    await expect(heroSection).toHaveClass(/from-gray-950/);
    await expect(heroSection).toHaveClass(/to-gray-900/);
  });
});