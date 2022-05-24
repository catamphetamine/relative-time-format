import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fur';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;