import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'eo';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;
