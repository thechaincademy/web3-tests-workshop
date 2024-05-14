import synpress from '../synpress'

const test = synpress

const { expect } = test

test('should confirm contract deployment', async ({ page, metamask, connectToAnvil }) => {
  await connectToAnvil()

  await expect(page.locator('#tokenAddresses')).toBeEmpty()
  await page.locator('#createToken').click()

  await metamask.confirmTransaction()

  await expect(page.locator('#tokenAddresses')).toHaveText('0x5FbDB2315678afecb367f032d93F642f64180aa3')
})