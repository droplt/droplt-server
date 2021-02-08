import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Example', () => {
  test('assert sum', async (assert) => {
    const { body } = await supertest(BASE_URL).get('/').expect(200)
    console.log(body)
    assert.equal(2 + 2, 4)
  })
})
