import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'jv';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;