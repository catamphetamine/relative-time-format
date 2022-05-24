import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'su';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;