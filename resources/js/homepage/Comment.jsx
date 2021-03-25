import moment from 'moment';
export default function Comment(props) {
    const comment = props;
    
        return (
            <div className="comment-detail">
                <div className="comment-detail__main">
                        <div className="comment-detail__user" >
                            User: <a href={"/user/"+comment.user_id}>{ comment.user  ? comment.user.first_name + ' ' + comment.user.last_name : '-' }</a>
                            </div>
                        <div className="comment-detail__comment" >Comment: {comment.comment}</div>
                        <div className="comment-detail__created" >Posted: {moment(comment.created_at).format('kk:mm D/MM/YYYY')}</div>
                </div>
            </div>
        )
}