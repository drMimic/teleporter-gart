import React from 'react'
import renderer from 'react-test-renderer'

import Query from './Query'

test('Load Default Input, Submit, Clear functionality snapshot tests', () => {
  const component = renderer.create(<Query />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  const e = { preventDefault: jest.fn() }
  const btnLoadDefaultInput = component.root.findAllByType('input')[2].props
  const btnSubmit = component.root.findAllByType('input')[0].props
  const btnClear = component.root.findAllByType('input')[1].props
  
  // trigger loadDefaultInput
  btnLoadDefaultInput.onClick(e)
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // trigger submit
  btnSubmit.onClick(e)
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // trigger clear
  btnClear.onClick()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})