import React, {useState, useEffect} from 'react'
import usePolicyInformation from "../.../../../../../hooks/usePolicyInoformation";

const PolicyInfo = ({ user }) => {
  const {getPolicyInformation} = usePolicyInformation();
  const [policyInfo, setPolicyInfo] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const fetchPoicy = async () => {
    debugger
    const response = await getPolicyInformation();
    if (response?.status < 300) {
      setPolicyInfo(response?.policy_information)
    } else if (response.status > 300) {
      setErrorMessage(response.message);
    }
  }

  useEffect(() => {
    fetchPoicy();
  }, [])
    return (
    <div className='insuredClientGroup__container__cardsBox__card'>
      <div className='insuredClientGroup__container__cardsBox__card__top'>
        {user?.data?.role === "broker" ?
          <p>Policy info</p>
          :
          <p>Group policy info</p>
        }
      </div>
      <div className='insuredClientGroup__container__cardsBox__card__detailsBox'>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Company Name:</p>
          <p>{policyInfo?.company_name}</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Company KRS number:</p>
          <p>{policyInfo?.company_krs_number}</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Company URL address:</p>
          <p>{policyInfo?.company_url_address}</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Risk inception date:</p>
          <p>{policyInfo?.risk_inseption_date}</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Risk expiry date:</p>
          <p>{policyInfo?.risk_expiry_date}</p>
        </div>
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Risk renewal date:</p>
          <p>{policyInfo?.risk_renewal_date}</p>
        </div>
        {user?.data?.role === "member" ?
          <></>
          :
          <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
            <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>No of insured persons:</p>
            <p>{policyInfo?.no_of_insured_persons}</p>
          </div>
        }
        <div className='insuredClientGroup__container__cardsBox__card__detailsBox__data'>
          <p className='insuredClientGroup__container__cardsBox__card__detailsBox__data__name'>Mandated broker:</p>
          <p>{policyInfo?.mandated_broker}</p>
        </div>
      </div>
    </div>
  )
}

export default PolicyInfo