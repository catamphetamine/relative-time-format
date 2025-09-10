import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'tn';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;