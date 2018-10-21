import TimelineGame from '@/TimelineGame.js'
import { events, orderedEvents } from '../fixtures/events.js'

describe('TimelineGame', () => {
  let game
  beforeEach(() => {
    game = new TimelineGame(events)
  })

  describe('on initialize', () => {
    test('has all events', () => {
      expect(game.events).toHaveLength(events.length)
    })

    test('order events by date', () => {
      expect(game.events.map(e => e.year)).toStrictEqual(orderedEvents.map(e => e.year))
    })

    test('all events has onBoard property to false', () => {
      game.events.forEach((event) => {
        expect(event).toHaveProperty('onBoard')
        expect(event.onBoard).toEqual(false)
      })
    })

    test('board is empty', () => {
      expect(game.board).toHaveLength(0)
    })

    test('desk is full', () => {
      expect(game.desk).toHaveLength(events.length)
    })
  })

  describe('function eventCanBePutThere', () => {
    describe('when board is empty', () => {
      test('must return true ', () => {
        expect(game.eventCanBePutThere(events[0])).toBeTruthy()
      })
    })
  })

  describe('function play', () => {
    describe('event when board is empty', () => {
      beforeEach(() => {
        game.play(events[0])
      })

      test('must change event onBoard property to true', () => {
        expect(game.events[0].onBoard).toBeTruthy()
      })

      test('must push event on board', () => {
        expect(game.board).toEqual(
          expect.arrayContaining([
            expect.objectContaining(events[0])
          ])
        )
      })

      test('must remove event from desk', () => {
        expect(game.desk).toEqual(
          expect.not.arrayContaining([
            expect.objectContaining(events[0])
          ])
        )
      })
    })

    describe('with one event in board', () => {
      beforeEach(() => {
        game.play(events[2])
      })

      describe('when older event is put after younger event', () => {
        beforeEach(() => {
          game.play(events[3], 1)
        })

        test('must change event onBoard property to true', () => {
          expect(game.events[3].onBoard).toBeTruthy()
        })

        test('must push event on board', () => {
          expect(game.board).toEqual(
            expect.arrayContaining([
              expect.objectContaining(events[3])
            ])
          )
        })

        test('must remove event from desk', () => {
          expect(game.desk).toEqual(
            expect.not.arrayContaining([
              expect.objectContaining(events[3])
            ])
          )
        })
      })

      describe('when younger event is put before older event', () => {
        beforeEach(() => {
          game.play(events[1], 0)
        })

        test('must change event onBoard property to true', () => {
          expect(game.events[1].onBoard).toBeTruthy()
        })

        test('must push event on board', () => {
          expect(game.board).toEqual(
            expect.arrayContaining([
              expect.objectContaining(events[1])
            ])
          )
        })

        test('must remove event from desk', () => {
          expect(game.desk).toEqual(
            expect.not.arrayContaining([
              expect.objectContaining(events[1])
            ])
          )
        })
      })

      describe('when younger event is put after older event', () => {
        beforeEach(() => {
          game.play(events[1], 1)
        })

        test('event onBoard to be false', () => {
          expect(game.events[1].onBoard).toBeFalsy()
        })

        test("must doesn't push event on board", () => {
          expect(game.board).toEqual(
            expect.not.arrayContaining([
              expect.objectContaining(events[1])
            ])
          )
        })

        test('must keep event from desk', () => {
          expect(game.desk).toEqual(
            expect.arrayContaining([
              expect.objectContaining(events[1])
            ])
          )
        })
      })

      describe('when older event is put before younger event', () => {
        beforeEach(() => {
          game.play(events[3], 0)
        })

        test('event onBoard to be false', () => {
          expect(game.events[1].onBoard).toBeFalsy()
        })

        test("must doesn't push event on board", () => {
          expect(game.board).toEqual(
            expect.not.arrayContaining([
              expect.objectContaining(events[3])
            ])
          )
        })

        test('must keep event from desk', () => {
          expect(game.desk).toEqual(
            expect.arrayContaining([
              expect.objectContaining(events[3])
            ])
          )
        })
      })
    })
  })
})
