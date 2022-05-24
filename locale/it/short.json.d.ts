import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'it';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;