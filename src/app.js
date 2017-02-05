import {groupBy} from 'lodash/collection'
import people from './people'
import $ from 'jquery'

const managerGroups = groupBy(people, 'manager')

$('span').hide(1000);

const root = document.querySelector('#root')
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`
