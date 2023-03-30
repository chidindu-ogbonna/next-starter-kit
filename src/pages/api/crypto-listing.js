import next from 'next'
import { NextApiRequest, NextApiResponse } from 'next'
import { StatusCodes } from 'http-status-codes'

/**
 *  Get crypto listing
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const url =
          'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?' +
          new URLSearchParams({
            symbol: 'ETH,BTC,USDT,USDC,MATIC',
          })
        const response = await fetch(url, {
          headers: {
            'X-CMC_PRO_API_KEY': '8a2e6fbb-1191-48ad-b3f9-56428f399b7e',
          },
        })
        const result = await response.json()
        const { status, data } = result

        if (status.error_code !== 0) {
          return res.status(StatusCodes.BAD_REQUEST).json(status)
        }

        return res.status(StatusCodes.OK).json(data)
      } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
      }

    default:
      return res.status(StatusCodes.NOT_IMPLEMENTED).json()
  }
}
