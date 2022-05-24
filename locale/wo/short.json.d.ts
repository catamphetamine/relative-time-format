import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'wo';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;