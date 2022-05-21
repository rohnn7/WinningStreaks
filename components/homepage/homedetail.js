import classes from './homedetail.module.css'
import Card from '../UI/card';

function HomeDetail()
{
    return(
        <div className={classes.homeCardContainer} >
            <Card head='World 1st Leading Indicator'
                  para1='We are proud to introduce
                  &#39;WINNING STREAKS&#39; a
                  software of its own kind,
                  delivering world 1st Leading
                  Indicator for stock market, which
                  is independent of any past
                  performance. '
                  para2='A perfect blend of Statistical
                  Analysis and Astronomical
                  factors, projecting future moves
                  of any stock/indices, well in
                  advance' />

            <Card head='Trade with Confidence'
                  para1='Enhance the level of your
                  confident entries in stock market
                  with ADVANCE knowledge of
                  upcoming uptrend and
                  downtrend. A well informed
                  decision to trade, inceases your
                  chances to win significantly. '
                  para2='In addition to the upcoming
                  trend, BULLET SIGNALS
                  informs you of sudden upcoming
                  JERKS in the trend, boosting
                  your profits.' />
                  
            <Card head='Consistent Profits'
                  para1='&#39;WINNING STREAKS&#39; a
                  software with future orientation,
                  provides rich tools and levels,
                  which informs you of future
                  oppurtunities and threats in the
                  stock market, in turn, avoiding
                  losses and increases profits. '
                  para2='A sensible use of this software
                  enables one to consistently make
                  profits in any market condition
                  and in any stock market of the
                  world.' />
        </div>
    )
}

export default HomeDetail;