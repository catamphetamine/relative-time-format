import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'km';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;