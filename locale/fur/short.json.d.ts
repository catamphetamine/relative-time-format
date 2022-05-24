import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fur';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;