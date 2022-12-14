import { useDispatch, useSelector } from 'react-redux';
import { GrPowerReset } from 'react-icons/gr';
import { BsChevronDown } from 'react-icons/bs';
import { useRef } from 'react';
import {
    filtersChangeRange,
    filtersChooseClothes,
    filtersReset,
} from './FilterSlice';
import { useGetFiltersQuery } from '../../api/apiSlice';

const Filter = _ => {

    const {
        data: filters = []
    } = useGetFiltersQuery();

    const dispatch = useDispatch(),
        { range } = useSelector(state => state.filters),
        { maxPrice } = useSelector(state => state.products),
        inputRefs = useRef([])


    const resetFilters = _ => {
        dispatch(filtersReset())
        inputRefs.current.forEach(item => item.checked = false)
    }

    return (
        <section id="filter">
            <div className="filter__title">
                <h4>Refine</h4>
                <GrPowerReset onClick={_ => resetFilters()} />
            </div>
            <div className="filter__item">
                <h5>price range
                    <BsChevronDown />
                </h5>

                <div className="filter__content">
                    <div className='filter__value'>
                        <span>{range}</span>
                        <span>{maxPrice}</span>
                    </div>
                    <div className="filter__range">

                        <input
                            type="range"
                            max={maxPrice}
                            value={range}
                            onChange={e => dispatch(filtersChangeRange(+e.target.value))}
                        />

                    </div>
                </div>
            </div>
            <div className="filter__item">
                <h5>clothing
                    <BsChevronDown />
                </h5>
                <div className="filter__content">
                    {filters.map(({ id, name }) => (
                        <div key={id} className="filter__content-item">
                            <input
                                ref={e => inputRefs.current[id - 1] = e}
                                name={name}
                                onChange={e => dispatch(filtersChooseClothes(e.target.name))}
                                type="checkbox" />
                            <span>{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Filter;