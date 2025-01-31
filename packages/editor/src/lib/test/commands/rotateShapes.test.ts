import { createCustomShapeId } from '@tldraw/tlschema'
import { TLGeoUtil } from '../../app/shapeutils/TLGeoUtil/TLGeoUtil'
import { TestApp } from '../TestApp'

let app: TestApp

afterEach(() => {
	app?.dispose()
})

const ids = {
	box1: createCustomShapeId('box1'),
	box2: createCustomShapeId('box2'),
}

beforeEach(() => {
	app = new TestApp()

	app.createShapes([
		{
			id: ids.box1,
			type: 'geo',
			x: 10,
			y: 10,
			props: {
				w: 100,
				h: 100,
			},
		},
		{
			id: ids.box2,
			type: 'geo',
			x: 200,
			y: 200,
			props: {
				w: 100,
				h: 100,
			},
		},
	])
})

describe('app.rotateShapes', () => {
	it('Rotates shapes and fires events', () => {
		// Set start / change / end events on only the geo shape
		const util = app.getShapeUtil(TLGeoUtil)

		// Bad! who did this (did I do this)
		const fnStart = jest.fn()
		util.onRotateStart = fnStart

		const fnChange = jest.fn()
		util.onRotate = fnChange

		const fnEnd = jest.fn()
		util.onRotateEnd = fnEnd

		// Select the shape...
		app.select(ids.box1, ids.box2)

		const { selectionPageCenter } = app

		// Rotate the shape...
		app.rotateShapesBy(app.selectedIds, Math.PI)

		// Once for each shape
		expect(fnStart).toHaveBeenCalledTimes(2)

		// Once for each shape
		expect(fnChange).toHaveBeenCalledTimes(2)

		// Once for each shape
		expect(fnEnd).toHaveBeenCalledTimes(2)

		// Are the shapes rotated?
		app
			.expectShapeToMatch({ id: ids.box1, rotation: Math.PI })
			.expectShapeToMatch({ id: ids.box2, rotation: Math.PI })

		// Are the centers the same?
		expect(selectionPageCenter).toMatchObject(app.selectionPageCenter!)
	})
})
