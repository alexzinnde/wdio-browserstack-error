import {browser} from '@wdio/globals';
import {expect, use} from 'chai';
import chaiAsPromised from 'chai-as-promised';

use(chaiAsPromised);

describe('Sanity check', () => {
  before('Given the browser navigates to [google.com]', () => browser.url('https://google.com'));

  it('has the correct url', () => expect(browser.getUrl()).to.eventually.equal('https://www.google.com/'));
  it('has the correct title', () => expect(browser.getTitle()).to.eventually.equal('Google'));
})