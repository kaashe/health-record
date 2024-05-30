import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import WithDraw from '../../features/withdraw'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Withdraw"}))
      }, [dispatch])


    return(
        <WithDraw />
    )
}

export default InternalPage