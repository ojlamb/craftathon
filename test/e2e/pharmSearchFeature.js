describe('Pharmacy finder', function() {

  it('finds pharmacies by name', function() {
    browser.get('http://localhost:8080');

    element(by.model('searchName')).sendKeys('ap');

    expect(element(by.binding('pharmacy[0]')).getText()).toEqual('Ap Booth');
  })

  it('finds pharmacies by postcode', function() {
    browser.get('http://localhost:8080');

    element(by.model('searchPostcode')).sendKeys('NE22 7JN');

    expect(element(by.binding('pharmacy[7]')).getText()).toEqual('1 Station Street Bedlington Station NE22 7JN');
  })

  it('finds pharmacies by NACS', function() {
    browser.get('http://localhost:8080');

    element(by.model('searchNACS')).sendKeys('FRL14');

    expect(element(by.binding('pharmacy[1]')).getText()).toEqual('FRL14');
  })

});
