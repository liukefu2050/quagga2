import ArrayHelper from '../../src/common/array_helper';
import { expect } from 'chai';
import sinon from 'sinon';

describe('init', function() {
    it('initializes an array with the given value', function() {
        const input = [0, 0, 0];
        ArrayHelper.init(input, 5);
        expect(input).to.deep.equal([5, 5, 5]);
    });
});

describe('shuffle', function() {
    let MathStub: sinon.SinonStub;
    before(function() {
        MathStub = sinon.stub(Math as any, 'random').returns(0.5); // TODO: remove as any, and fix this type def issue
    });

    after(function() {
        MathStub.restore();
    });
    it('shuffles the content of an array', function() {
        var input = [1, 2, 3];
        expect(ArrayHelper.shuffle(input)).to.deep.equal([3, 1, 2]);
    });
});

describe('toPointList', function() {
    it('converts an Array to a List of points', function() {
        var input = [[1, 2], [2, 2], [3, 2]];
        expect(ArrayHelper.toPointList(input)).to.equal('[[1,2],\r\n[2,2],\r\n[3,2]]');
    });
});

describe('threshold', function() {
    it('returns all elements above the given threshold', function() {
        var input = [1, 2, 3];
        expect(ArrayHelper.threshold(input, 2, function(score) {
            return score * 1.5;
        })).to.deep.equal([2, 3]);
    });
});

describe('maxIndex', function() {
    it('gets the index of the biggest element in the array', function() {
        var input = [1, 2, 3];
        expect(ArrayHelper.maxIndex(input)).to.equal(2);
    });
});

describe('max', function() {
    it('gets the biggest element in the array', function() {
        var input = [1, 3, 2];
        expect(ArrayHelper.max(input)).to.equal(3);
    });
});
