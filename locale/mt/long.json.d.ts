import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mt';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;