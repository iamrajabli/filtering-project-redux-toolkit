import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchData } from '../../actions';
import useHttp from '../../hooks/http.hook';
import { GrPowerReset } from 'react-icons/gr';
import { BsChevronDown } from 'react-icons/bs';
import { useEffect, useRef } from 'react';
import {
    filtersChangeRange,
    filtersChooseClothes,
    filtersClothesLabelsFetched,
    filtersReset
} from './FilterSlice';

const Filter = _ => {

    const dispatch = useDispatch(),
        { range, clothesLabels } = useSelector(state => state.filters),
        { maxPrice } = useSelector(state => state.products),
        { request } = useHttp(),
        inputRefs = useRef([])


    useEffect(() => {
        dispatch(fetchData(request, filtersClothesLabelsFetched, 'http://localhost:3000/clothing'))
    }, []);

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
                    {clothesLabels.map(({ id, name }) => (
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