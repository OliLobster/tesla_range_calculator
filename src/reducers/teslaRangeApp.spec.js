describe('test reducer', () => {
    it('should handle initial stat', () => {
        expect(
            appReducer(undefined, {})
        ).toEqual(initialState)
    })
})
