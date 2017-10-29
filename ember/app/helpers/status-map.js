import Ember from 'ember';

export function statusMap(params/*, hash*/) {
  const status = params[0] || 'no-status';
  
  const map = {
    'no-status': 'Queued',
    'hire': 'Offer Sent',
  };

  return map[status];
}

export default Ember.Helper.helper(statusMap);
