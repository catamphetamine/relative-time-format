import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MW';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;