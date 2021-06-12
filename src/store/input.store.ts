import { makeAutoObservable } from "mobx"
import erc20 from "interfaces/erc20"
import erc721 from "interfaces/erc721"

export enum TokenType {
  ERC20,
  ERC721,
}

class InputStore {
  tokenType: TokenType = TokenType.ERC20
  erc20: erc20 = {
    name: "Fondu",
    symbol: "FDU",
    decimals: 18,
    rate: 250,
    receiver: "0x281055afc982d96fab65b3a49cac8b878184cb16",
    capped: false,
    whitelist: false,
    timed: false,
    maxTokens: 0,
  }
  erc721: erc721 = {
    name: "Fondu",
    symbol: "FDU",
    receiver: "0x281055afc982d96fab65b3a49cac8b878184cb16",
  }

  constructor() {
    makeAutoObservable(this)
  }

  setTokenType(tokenType: TokenType) {
    this.tokenType = tokenType
  }

  setERC20Capped(cap: boolean) {
    this.erc20.capped = cap
  }

  setERC20TokensCap(cap: string) {
    this.erc20.maxTokens = parseInt(cap, 10)
  }

  setERC20Timed(timed: boolean) {
    this.erc20.timed = timed
  }

  setERC20Whitelist(whitelist: boolean) {
    this.erc20.whitelist = whitelist
  }

  setERC20TokenName(tokenName: string) {
    this.erc20.name = tokenName
  }

  setERC20TokenSymbol(tokenSymbol: string) {
    this.erc20.symbol = tokenSymbol
  }

  setERC20Receiver(wallet: string) {
    this.erc20.receiver = wallet
  }

  setERC20Decimals(decimals: string) {
    this.erc20.decimals = parseInt(decimals, 10)
  }

  setERC20Rate(tokens: string) {
    this.erc20.rate = parseInt(tokens, 10)
  }
}

export const inputStore = new InputStore()
